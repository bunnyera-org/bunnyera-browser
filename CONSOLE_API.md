# BunnyEra Browser Console API v1.2

## Profiles

GET /api/profiles

POST /api/profiles/create

Body:
{
"name":"US-001"
}

## Sessions

GET /api/sessions

POST /api/sessions/start

{
"profileId":"US-001"
}

POST /api/sessions/stop

{
"profileId":"US-001"
}
