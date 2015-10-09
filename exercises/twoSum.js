/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

module.exports = (function () {
    'use strict';

    var twoSum = function (nums, target) {
        var result = [],
        hash = {};
        for (var i = 0; i < nums.length; i++) {
            if (typeof( hash[target - nums[i]]) !== 'undefined') {
                result.push(hash[target - nums[i]]);
                result.push(i+1);
            }
            hash[nums[i]] = i + 1;
        }
        return result;
    };

    return twoSum;
}());
