# Random Image API

## Description

The Random Image API is a simple RESTful API built with Node.js and Express.js that provides endpoints for fetching random image URLs. This project serves as an introduction to backend development, focusing on setting up a server, handling HTTP requests, and generating dynamic responses.

The API fetches random images from an external source and returns them in a JSON format. It is suitable for learning purposes and can be extended to include additional features or integrations.


# API Endpoints

Get Random Image
Endpoint: /api/images/random
Method: GET
Query Parameters:
count (optional): Specifies the number of random image URLs to return. Default is 1 if not specified.
Example Request
To fetch 3 random image URLs:

GET http://localhost:8081/api/images/random?count=3

Example Response
{
    "count": 3,
    "images": [
        "https://picsum.photos/200?random=0.123456789",
        "https://picsum.photos/200?random=0.987654321",
        "https://picsum.photos/200?random=0.456789123"
    ]
}

# Testing
You can test the API endpoints using tools like Postman or by making requests directly through a web browser.

Postman Example
Open Postman.
Create a new GET request.
Enter the request URL: http://localhost:8081/api/images/random
Add query parameters if necessary (count=3 for example).
Send the request and verify the response.


# Challenges
During the development of this project, the following challenges were encountered:

Handling External Service: Integrating with an external service to fetch random images securely and efficiently.
Error Handling: Implementing robust error handling to manage API requests and responses effectively.
Testing: Ensuring thorough testing of API endpoints to validate functionality and edge cases.
