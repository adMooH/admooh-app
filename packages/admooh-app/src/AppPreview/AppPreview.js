export default function AppPreview(props) {
  const appProps = {
    data: props.data,
    setApp: props.setApp,
    context: props.context,
  };
  return props.getApp(appProps);
}
