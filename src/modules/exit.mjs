import goodbyeUser from '../utils/helpers/goodbyeUser.mjs';

const exit = () => {
  goodbyeUser();
  process.exit();
};

export default exit;
