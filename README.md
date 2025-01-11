
---

### Scheduler-Nish-Be - README.md

```markdown
# Scheduler-Nish-Be

Scheduler-Nish-Be is the backend service for managing email campaigns. It handles scheduling and sending of emails using Agenda and Nodemailer.

## Features

- **Task Scheduling**: Uses Agenda for managing scheduled tasks.
- **Email Delivery**: Sends emails efficiently using Nodemailer.
- **RESTful APIs**: Integrates seamlessly with the frontend.

---

## Getting Started

Follow these steps to set up and run the backend service.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later): [Download here](https://nodejs.org/)
- **MongoDB**: [Download and Install MongoDB](https://www.mongodb.com/try/download/community) or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

### Installation Steps

1. **Clone the Repository**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/yourusername/Scheduler-Nish-Be.git
   cd Scheduler-Nish-Be

2. Install Dependencies

npm install

3. Setu Environment Variables

in .env file

PORT=1608
DBURL=Your mongodb/otherDB url
USER=User-Mail
PASS=Password for the mail
JWT_TOKEN=string to make rounds with

4 . Start the server

npm run start

5. API
POST - /sendemail
POST - /signup
POST - /login
POST - /logout
