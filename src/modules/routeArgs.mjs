import getEOLInfo from './os/getEOLInfo.mjs';
import getCpusInfo from './os/getCpusInfo.mjs';
import getHomedirInfo from './os/getHomedirInfo.mjs';
import getUsernameInfo from './os/getUsernameInfo.mjs';
import getArchitectureInfo from './os/getArchitectureInfo.mjs';

const routeArgs = {
  eol: getEOLInfo,
  cpus: getCpusInfo,
  homedir: getHomedirInfo,
  username: getUsernameInfo,
  architecture: getArchitectureInfo,
};

export default routeArgs;
