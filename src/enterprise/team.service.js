const teams = [];

export function createWorkspace(name) {
  const workspace = {
    name,
    createdAt: new Date().toISOString()
  };

  teams.push(workspace);
  return workspace;
}

export function listWorkspaces() {
  return teams;
}
