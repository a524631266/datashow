import Mock from 'mockjs';
const  createTuple = (types: string,num: number) => {
    const arr: any[]= [];
    for (let index = 0; index < num; index++) {
        arr[index] = Mock.mock(types);
    }
    arr.sort();
    return arr;
};

import moment from "moment";
const  createTupleOrderTime = (types: string,num: number) => {
    const arr: any[]= [];
    const start = moment(moment(Mock.mock(types)).format("YYYY-MM-DD")).valueOf();
    for (let index = 0; index < num; index++) {
        arr[index] = start + index * 24 * 60 * 60 *1000 ;
    }
    return arr;
};
const nums = 10;
const  createArrayObject = (object: any,num: number) => {
    const arr: any[]= [];
    for (let index = 0; index < num; index++) {
        arr[index] = object;
    }
    return arr;
};

export default {
  list: () => {
    const items = Mock.mock({
      stack: {
        time: createTupleOrderTime('@integer(1550000000000, 1551842787000)',nums),
        data: createArrayObject({
                name: '@cname',
                data: createTuple('@integer(10, 100)',nums)
            },nums
        )
      }
    });
    return items;
  },
};


// const items = Mock.mock({
//     stack: {
//       time: createTuple('@integer(1550000000000, 1551842787000)',nums),
//       data: {
//           name: '@id',
//           data: createTuple('@integer(10, 100)',nums)
//       }
//     }
//   });
// console.log(items);
// [{
//     'id': '@id',
//     'title': '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     'author': 'name',
//     'display_time': '@datetime',
//     'pageviews': '@integer(300, 5000)',
//   }],
