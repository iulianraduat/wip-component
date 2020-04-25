interface WIPComponentProps {
  children: JSX.Element | null;
  env?: string;
}

export const _WIPComponent = (props: WIPComponentProps): JSX.Element | null => {
  const { children, env } = props;
  return env === 'development' ? children : null;
};
