// Importing basic components from React Native
import { FlatList, Text, TouchableOpacity, View, Dimensions } from "react-native";

// React hooks to manage state and memoization
import { useState, useMemo } from "react";

// Moment is a library that helps work with dates (like getting today or next week)
import moment from "moment";

// Get the width of the phone screen so we can size our date strip properly
const screenWidth = Dimensions.get("window").width;

// This is the main component that shows the horizontal calendar
const CalendarStrip = () => {
  // Get today's date in the format 'YYYY-MM-DD' (example: 2025-06-14)
  const today = moment().format("YYYY-MM-DD");

  // Create a piece of memory (state) to remember which day the user has selected
  // By default, the selected day is today
  const [focusedDay, setFocusedDay] = useState(today);

  // This block generates a list of 60 days (30 before and 30 after today)
  // Then it splits them into smaller groups (chunks) of 5 days each
  const pagedDays = useMemo(() => {
    // Start from 30 days before today
    const start = moment().subtract(30, "days");

    // Create a list of 60 days by adding 1 day at a time
    const allDays = Array.from({ length: 60 }, (_, i) => start.clone().add(i, "days"));

    // Now divide the list of 60 days into chunks of 5
    const chunks = [];
    for (let i = 0; i < allDays.length; i += 5) {
      chunks.push(allDays.slice(i, i + 5)); // Slice out 5 days at a time
    }

    // Return the list of chunks (each chunk is a 5-day window)
    return chunks;
  }, []);

  // This part finds out which chunk contains today's date
  const initialChunkIndex = useMemo(() => {
    return pagedDays.findIndex((chunk) =>
      chunk.some((d) => d.format("YYYY-MM-DD") === today) // Look inside each chunk for today
    );
  }, [pagedDays, today]);

  // The actual UI part of the calendar
  return (
    <View style={{ paddingVertical: 10 }}>
      {/* Display the month (like "June 2025") above the strip */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 16, marginBottom: 10 }}>
        {moment(focusedDay).format("MMMM YYYY")} {/* Format the selected date into "Month Year" */}
      </Text>

      {/* Create the horizontal scrolling list of 5-day windows */}
      <FlatList
        data={pagedDays} // Supply the 5-day chunks as data
        horizontal // Make the list scroll sideways
        pagingEnabled // Snap to each 5-day page when scrolling
        showsHorizontalScrollIndicator={false} // Hide the scroll bar
        keyExtractor={(_, index) => index.toString()} // Give each chunk a unique key
        initialScrollIndex={initialChunkIndex} // Scroll straight to the chunk with today
        getItemLayout={(_, index) => ({
          length: screenWidth,        // Each chunk takes up the full width of the screen
          offset: screenWidth * index, // Calculate position of each chunk
          index,
        })}
        renderItem={({ item }) => (
          // Display one 5-day window at a time
          <View style={{ flexDirection: "row", width: screenWidth, justifyContent: "space-evenly" }}>
            {item.map((day) => {
              // For each individual day in the chunk
              const dateStr = day.format("YYYY-MM-DD"); // Format the date to match the selected format
              const isSelected = dateStr === focusedDay; // Check if this is the selected day

              return (
                <TouchableOpacity
                  key={dateStr} // Give each day a unique key
                  onPress={() => setFocusedDay(dateStr)} // When pressed, update the selected day
                  style={{
                    backgroundColor: isSelected ? "#F5BE2F" : "#f2f2f2", // Yellow if selected, gray otherwise
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 14,
                    alignItems: "center",
                    width: 60, // Make all date buttons the same size
                  }}
                >
                  {/* Show the day of the week (like "Mon", "Tue") */}
                  <Text style={{ color: "#888" }}>{day.format("ddd")}</Text>

                  {/* Show the day number (like "14") */}
                  <Text style={{ color: isSelected ? "#fff" : "#000", fontWeight: "bold" }}>
                    {day.format("D")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />
    </View>
  );
};

// Export this component so it can be used in other screens
export default CalendarStrip;
