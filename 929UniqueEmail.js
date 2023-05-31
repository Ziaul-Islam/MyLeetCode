/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let unique = new Set();
    for(let email of emails){
        let [local, domain] = email.split('@');
        local = local.replace(/\./g, '');
        let index = local.indexOf('+');
        if(index !== -1){
            local = local.substring(0,index);
        }
        unique.add(local+'@'+domain);
    }
    return unique.size;
};