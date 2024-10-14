#!/bin/bash

IDLE_TIME=300
PROFILE_NAME="idle_screensaver"
PROFILE_DIR="$HOME/.mozilla/firefox"
PROFILE_PATH="$PROFILE_DIR/${PROFILE_NAME}"

# Function to check if the screensaver profile is running
is_screensaver_running() {
    pgrep -f "firefox.*-P $PROFILE_NAME" > /dev/null
    return $?
}

# Function to create the Firefox profile if it doesn't exist
create_firefox_profile() {
    if [ ! -d "$PROFILE_PATH" ]; then
        echo "Creating Firefox profile '$PROFILE_NAME'..."
        firefox -CreateProfile "$PROFILE_NAME"
    fi
}

while true; do
    # Check idle time
    IDLE=$(xprintidle)

    if [ $IDLE -gt $((IDLE_TIME)) ]; then
        # Ensure the profile exists
        create_firefox_profile

        if ! is_screensaver_running; then
            # Open Firefox with the specific profile for the screensaver
            nohup firefox -P $PROFILE_NAME "file:///home/hamza/Projects/JS/index.html" --fullscreen --kiosk >/dev/null 2>&1 &
        fi
    fi

    # Check every 10 seconds
    sleep 10
done