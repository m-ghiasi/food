

type PropTypes = {
    label: string;

};

const Login = (props:PropTypes) => {
  const {label} = props;

  return <>
  <label htmlFor="">{label}</label>
  <input type="text" />
  
  </>;
};

export default Login;
