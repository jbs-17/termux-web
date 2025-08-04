import { spawn } from 'child_process';

const ssh = spawn('ssh', ['-p', '22', 'hewlett-packard@localhost']);


ssh.stdout.on('data', (chunk)=>{
  console.log(chunk.toString());
});
ssh.stdin.write('node', )