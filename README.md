Hospital Management System Backend Documentation

Overview
This document outlines the architecture, design decisions, and implementation details for a secure hospital management system backend. The system handles user management, patient-doctor assignments, secure medical notes, and dynamic scheduling using LLM processing.
Tech Stack

Node.js: Server-side JavaScript runtime
MongoDB: NoSQL database for flexible data storage
ES6 Modules: Modern JavaScript module system
JWT: JSON Web Tokens for authentication
Google Gemini: LLM for processing medical notes

Core Features
1. User Management & Authentication
Implementation

JWT-based authentication
Secure password hashing using bcrypt
Role-based access control (Patient/Doctor)

Justification

JWT provides stateless authentication, improving scalability
Bcrypt's salt rounds ensure password security
Role separation maintains clear access boundaries

2. End-to-End Encryption
Implementation

RSA/AES hybrid encryption system
Unique key pairs for each user
Encrypted medical notes

Justification

Hybrid encryption combines RSA's secure key exchange with AES's efficient encryption
Per-user key pairs ensure data isolation
Meets healthcare data protection requirements

3. Data Models
User Schema
javascriptCopy{
  name: String,
  email: String,
  password: String (hashed),
  role: Enum['patient', 'doctor']
}
Note Schema
javascriptCopy{
  doctorId: ObjectId,
  patientId: ObjectId,
  Content: String,
  checklist: String,
  plan: String,
  createdAt: Date
}

4. API Endpoints
Authentication
POST /signup
POST /login

Doctor Selection
GET /doctors
POST /select-doctor
GET /doctor/patients

Notes & Actions
POST /notes

Security Measures
1. Data Encryption

At Rest: All sensitive data encrypted before storage
In Transit: HTTPS required for all API communications
End-to-End: Medical notes encrypted with recipient's public key

2. Authentication & Authorization

JWT tokens expire after 24 hours
Route middleware validates user roles
Separate endpoints for patient and doctor actions

3. Input Validation

MongoDB schema validation
Request payload validation
Role-based access checks

LLM Integration
Implementation

Uses openai for note processing
Extracts actionable items into:

Immediate tasks (checklist)
Scheduled actions (plan)



Scheduling System

Dynamic scheduling based on LLM output
Automatic cancellation of previous tasks
Check-in system for tracking completion

Database Design Decisions
1. MongoDB Choice Justification

Flexible schema for varying medical data
Efficient handling of JSON-like data
Good scalability for large datasets
Rich query capabilities

2. Indexing Strategy

Indexed fields: email, role, assignedDoctor
Compound indexes for common queries
Text indexes for potential search functionality

**Error Handling**

Implementation
Detailed error messages with status codes
Error logging for debugging
Sanitized client responses

**Status Codes**

200: Success
201: Resource Created
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
500: Server Error

**Environment Variables**

WT_SECRET=your-secure-secret-key
MONGODB_URI=your-mongodb-connection-string
OPENAI_API_KEY=your-gemini-api-key

**Setup Instructions**

Clone the repository
Install dependencies:
bashCopynpm install

Set up environment variables in .env
Start the server:
bashCopynpm start


**Testing**
Recommended testing approach:

Create doctor account
Create patient account
Test doctor selection
Submit medical notes
Verify actionable steps creation

**Future Enhancements**

Refresh token implementation
Password reset functionality
Rate limiting
Audit logging
Real-time notifications
Multi-factor authentication

**Performance Considerations**

Implemented database indexing
Efficient encryption methods
Caching strategies for frequently accessed data
Pagination for large data sets

**Maintenance**

Regular security updates
Token cleanup
Database backups
Error log monitoring
Performance monitoring

**Support**

*For issues or questions:*

Check error logs
Verify environment variables
Ensure MongoDB connection
Check token validity