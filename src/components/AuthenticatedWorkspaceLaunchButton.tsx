import React from 'react';
import WorkspaceLaunchButton from '@kodai-yamamoto-siw/workspace-launch-ui';
import { useAuthAccountContext } from '@kodai-yamamoto-siw/docusaurus-microsoft-auth/client';

type WorkspaceLaunchButtonProps = React.ComponentProps<typeof WorkspaceLaunchButton>;

export type AuthenticatedWorkspaceLaunchButtonProps = {
  workspaceId: WorkspaceLaunchButtonProps['workspaceId'];
  structure: WorkspaceLaunchButtonProps['structure'];
  children?: WorkspaceLaunchButtonProps['children'];
};

const AuthenticatedWorkspaceLaunchButton: React.FC<AuthenticatedWorkspaceLaunchButtonProps> = ({
  workspaceId,
  structure,
  children,
}) => {
  const auth = useAuthAccountContext();

  if (!auth?.account?.homeAccountId) {
    throw new Error('AuthenticatedWorkspaceLaunchButton requires a signed-in account.');
  }

  return (
    <WorkspaceLaunchButton
      workspaceId={workspaceId}
      structure={structure}
      ownerId={auth.account.homeAccountId}
    >
      {children}
    </WorkspaceLaunchButton>
  );
};

export default AuthenticatedWorkspaceLaunchButton;
