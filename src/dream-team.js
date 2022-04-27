const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  // throw new NotImplementedError('Not implemented');
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] == 'number'){
      continue
    } else if(typeof members[i] === 'string'){
      team = ''
      team = team + members[i].charAt(0)
    } 
  } if((typeof team !== 'string')) {
    return false
  } else  {
    return (team.toUpperCase()).split('').sort().join('');
  }
} 

module.exports = {
  createDreamTeam
};
