import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { CreateWorkspaceTemplateOptions } from '@kodai-yamamoto-siw/workspace-template-generator';
import { createWorkspaceTemplate } from '@kodai-yamamoto-siw/workspace-template-generator';

export type WorkspaceLaunchButtonProps = CreateWorkspaceTemplateOptions & {
  className?: string;
  children?: React.ReactNode;
};

export default function WorkspaceLaunchButton(
  props: WorkspaceLaunchButtonProps
) {
  const { className, children, ...templateOptions } = props;
  const href = createWorkspaceTemplate(templateOptions);

  return (
    <Link className={clsx('button button--primary', className)} href={href}>
      {children ?? 'ワークスペースを開く'}
    </Link>
  );
}
