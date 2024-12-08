<h1> Backend Assesment </h1>

Key Features Covered
1. Multi-Level Referral Hierarchy
Logic:
Each user can refer up to 8 direct users.
Referral relationships are stored in the User schema.
Parent-child relationships are enforced while creating users in the /users endpoint.
2. Profit Distribution
Direct Earnings (5%): Implemented in the calculateAndDistributeEarnings function for Level 1 referrals.
Indirect Earnings (1%): Calculated for Level 2 referrals, provided the Level 1 parent exists.
Purchase Validation: Profits are only calculated if the purchase exceeds ₹1000.
3. Live Data Updates
WebSocket Logic:
Real-time updates are triggered whenever a new transaction is processed.
Earnings updates are broadcasted to all connected clients using the earnings-update event.
4. APIs for Reports
Fetch Earnings: /earnings/:userId API returns all earnings for a specific user.
Scalability: Easily extendable to include analytics and breakdowns.
5. Database Design
User Schema: Tracks referral relationships and parent-child hierarchy.
Earnings Schema: Logs transactions, profit percentages, and levels.
6. Edge Case Handling
Inactive Users: Earnings logic checks for parent availability.
Referral Limits: Parents cannot refer more than 8 users.
Purchase Threshold: Ensures profit calculations are only applied when the purchase exceeds ₹1000.
7. Security
Data Privacy: MongoDB schemas enforce secure handling of user data. Extendable for compliance (e.g., encryption or GDPR compliance).
What’s Included
The code implements:

User Management: Adding new users with parent-child relationships.
Transaction Handling: Calculates earnings for purchases, considering hierarchy and thresholds.
Real-Time Notifications: Live updates for user earnings using WebSocket.
API Endpoints: Provide earning reports for analytics.
