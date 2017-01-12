'use strict';

let arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
function removeElements(arr)
{

    let removeElement = arr.shift();
    Array.prototype.remove = function (num)
    {

        for (let i = 0; i < this.length; i += 1)
        {
            if (this[i] === num)
            {
                this.splice(i, 1);

                i -= 1;
            }
        }
        return this;
    };

    arr.remove(removeElement);
    arr.forEach(x => console.log(x));

}

removeElements(arr);
