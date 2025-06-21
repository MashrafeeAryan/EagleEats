// React Native core components used for layout, interaction, and measurement
import {
  FlatList,        // A performant horizontal/vertical scrolling list
  Text,             // Used to render text on the screen
  TouchableOpacity, // Makes items clickable/tappable
  View,             // Basic container/view element
  Dimensions        // Used to get screen width for responsive sizing
} from "react-native";

// React hooks for managing component state, references, and memoized values
import { useState, useMemo, useRef } from "react";

// Moment.js is used to easily work with and format dates
import moment from "moment";

// Ionicons library for displaying arrow icons in the calendar
import { Ionicons } from "@expo/vector-icons";

// Get the full width of the device screen so we can layout the calendar accordingly
const screenWidth = Dimensions.get("window").width;

// CalendarStrip component - shows a horizontal, paginated calendar with arrows
const CalendarStrip = () => {
  // Get today's date in "YYYY-MM-DD" format
  const today = moment().format("YYYY-MM-DD");

  // Keeps track of the currently selected day (highlighted)
  const [focusedDay, setFocusedDay] = useState(today);

  // Number of 5-day chunks to initially generate (12 chunks = 60 days)
  const [chunkCount, setChunkCount] = useState(12);

  // Reference to the FlatList, so we can programmatically scroll it left/right
  const flatListRef = useRef(null);

  // Compute the list of 5-day chunks using memoization
  const pagedDays = useMemo(() => {
    // Start the range from 30 days before today (chunkCount / 2 * 5 days)
    const start = moment().subtract((chunkCount / 2) * 5, "days");

    // Create a flat array of all days needed
    const allDays = Array.from({ length: chunkCount * 5 }, (_, i) =>
      start.clone().add(i, "days")
    );

    // Break the full list into smaller chunks of 5 days each
    const chunks = [];
    for (let i = 0; i < allDays.length; i += 5) {
      chunks.push(allDays.slice(i, i + 5));
    }

    return chunks; // Final list of 5-day chunks
  }, [chunkCount]);

  // Find the index of the chunk that contains today's date
  const initialChunkIndex = useMemo(() => {
    return pagedDays.findIndex((chunk) =>
      chunk.some((d) => d.format("YYYY-MM-DD") === today)
    );
  }, [pagedDays, today]);

  // Keeps track of which chunk (page) the user is currently viewing
  const [currentChunkIndex, setCurrentChunkIndex] = useState(initialChunkIndex);

  // Function to scroll the calendar left or right by chunk index
  const scrollToIndex = (index) => {
    if (index < 0) return; // prevent scrolling before the beginning

    // If the user scrolls beyond current available chunks, load more into memory
    if (index >= pagedDays.length - 1) {
      setChunkCount((prev) => prev + 6); // Add 6 more chunks (30 more days)
      return;
    }

    // Scroll to the specified index (page)
    setCurrentChunkIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  // Width available for the calendar dates (after accounting for left and right arrows)
  const calendarWidth = screenWidth - 80;

  // Dynamically calculate the width of each date box so 5 fit within the calendarWidth
  const dateBoxWidth = calendarWidth / 5 - 4; // 4px buffer between boxes

  return (
    <View style={{ paddingVertical: 10 }}>
      {/* Show the current month and year (e.g., "June 2025") */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 16,
          marginBottom: 10,
        }}
      >
        {moment(focusedDay).format("MMMM YYYY")}
      </Text>

      {/* Arrows and date strip are arranged horizontally */}
      <View
        style={{
          flexDirection: "row",            // Layout children side-by-side
          alignItems: "center",            // Vertically center all items
          justifyContent: "space-between", // Space out arrow - calendar - arrow
          paddingHorizontal: 10,           // Add spacing to left/right of strip
        }}
      >
        {/* Left arrow button */}
        <TouchableOpacity onPress={() => scrollToIndex(currentChunkIndex - 1)}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {/* FlatList that shows a chunk of 5 days at a time */}
        <FlatList
          ref={flatListRef}                      // Needed to scroll programmatically
          data={pagedDays}                       // Array of 5-day chunks
          horizontal                             // Horizontal scrolling
          pagingEnabled                          // Snap one chunk at a time
          showsHorizontalScrollIndicator={false} // Hide scroll bar
          keyExtractor={(_, index) => index.toString()} // Unique key for each chunk
          initialScrollIndex={initialChunkIndex}        // Start at today's chunk
          getItemLayout={(_, index) => ({
            length: calendarWidth,              // Each item takes full calendarWidth
            offset: calendarWidth * index,      // Distance from start
            index,
          })}
          onMomentumScrollEnd={(e) => {
            // After scrolling stops, calculate which chunk is now visible
            const newIndex = Math.round(
              e.nativeEvent.contentOffset.x / calendarWidth
            );
            setCurrentChunkIndex(newIndex);
          }}
          renderItem={({ item }) => (
            // Render each 5-day chunk as a row of date buttons
            <View
              style={{
                flexDirection: "row",
                width: calendarWidth,
                justifyContent: "space-between", // Even spacing between days
              }}
            >
              {/* Render each individual day in the chunk */}
              {item.map((day) => {
                const dateStr = day.format("YYYY-MM-DD");       // Format day to string
                const isSelected = dateStr === focusedDay;      // Check if selected

                return (
                  <TouchableOpacity
                    key={dateStr}                         // Unique key for day
                    onPress={() => setFocusedDay(dateStr)} // When tapped, set as selected
                    style={{
                      backgroundColor: isSelected ? "#F5BE2F" : "#f2f2f2", // Highlight selected
                      borderRadius: 10,
                      paddingVertical: 10,
                      alignItems: "center",
                      width: dateBoxWidth,               // Dynamically fit 5 days per row
                    }}
                  >
                    {/* Show weekday (Mon, Tue, etc.) */}
                    <Text style={{ color: "#888" }}>{day.format("ddd")}</Text>

                    {/* Show day number (e.g., 14) */}
                    <Text
                      style={{
                        color: isSelected ? "#fff" : "#000", // White if selected
                        fontWeight: "bold",
                      }}
                    >
                      {day.format("D")}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        />

        {/* Right arrow button */}
        <TouchableOpacity onPress={() => scrollToIndex(currentChunkIndex + 1)}>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Export the calendar component so you can use it in other screens
export default CalendarStrip;
