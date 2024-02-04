import goodbyeUser from './goodbyeUser.mjs';

const exit = () => {
  goodbyeUser();
  process.exit();
};

export default exit;
