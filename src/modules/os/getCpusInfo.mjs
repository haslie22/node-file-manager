import { cpus } from 'os';

const getCpusInfo = () => {
  const cpusInfo = cpus();

  const cpuInfo = cpusInfo.map((cpu, index) => ({
    CPU: `CPU${index + 1}`,
    Model: cpu.model,
    'Clock Rate': (cpu.speed / 1000).toFixed(2) + ' GHz',
  }));

  console.table(cpuInfo);
};

export default getCpusInfo;
