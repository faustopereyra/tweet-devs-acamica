import { signIn } from "../../services/auth";

const SignIn = () => <button onClick={signIn}>Sign In with Google</button>;

export default SignIn;
