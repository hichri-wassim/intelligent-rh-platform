# API CONTRACT – Recruitment Platform

## JWT
- secret: dev-secret-123
- claims:
  - sub = userId
  - role = CANDIDAT | RH

## Ports
- gateway: 8080
- auth-service: 8081
- recruitment-service: 8082
- interview-service: 8083

## Endpoints (MVP)

### Auth
- POST /auth/login
- POST /auth/register

### Jobs
- GET /jobs (public)
- GET /jobs/{id} (public)
- POST /jobs (RH)

### Applications
- POST /applications (CANDIDAT)
- GET /applications/my (CANDIDAT)
- PATCH /applications/{id}/status (RH)
