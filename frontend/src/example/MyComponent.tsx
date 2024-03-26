interface MyComponentProps {
  title: string;
}

const MyComponent = ({ title }: MyComponentProps): JSX.Element => {
  return <div>{title}</div>;
};
MyComponent.displayName = "MyComponent";

export { type MyComponentProps, MyComponent };
