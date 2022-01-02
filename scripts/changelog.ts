import { exec } from 'child_process';
import * as path from 'path';

const root = path.resolve();

function main(): void {
  const configPath = root + '/.changelogrc.js';
  const updateChangelog = `conventional-changelog -p ${configPath} -i CHANGELOG.md -s -r 0`;
  const commit = 'git add CHANGELOG.md && git commit -m ":dizzy: other: 更新changelog"';
  const command = [updateChangelog, commit].join(' && ');
  exec(command, (err) => {
    if (err !== null) {
      console.log('>>> Changelog 生成或提交失败！');
    } else {
      console.log('>>> Changelog 提交成功！');
    }
  });
}

main();
