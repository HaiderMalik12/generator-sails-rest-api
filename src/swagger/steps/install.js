/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'hoek'
];

export default function () {
  this.npmInstall(DEPENDENCIES, {save: true});
};
