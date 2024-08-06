// Define the FullStory API endpoint
const url = 'https://api.fullstory.com/v2/users';

// Your FullStory API key
const apiKey = process.env.FULL_STORY_API_KEY;

// User data to be created
const userData = {
  email: 'user@example.com',
  display_name: 'John Doe',
  uid: 'user123',  // Unique identifier for the user
  properties: {
    custom_property_1: 'value1',
    custom_property_2: 'value2'
  }
};

// Headers for the request
const headers = {
  'Authorization': `Basic ${apiKey}`,
  'Content-Type': 'application/json'
};

export const createFullStoryUser = async () => {
  // Make the POST request
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Failed to create user: ${response.status}`);
    }
  })
  .then(data => {
    console.log('User created successfully:', data);
  })
  .catch(error => {
    console.error(error);
  });
}
