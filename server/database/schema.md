# BunnyEra Browser v3.5 Database Design

Tables:

users
- id
- email
- password_hash
- role

workspaces
- id
- owner_id
- name

profiles
- id
- workspace_id
- profile_name
- sync_status

tasks
- id
- profile_id
- task_type
- status

api_keys
- id
- user_id
- key_hash
