import multi, {sum as sumGeneral, substract} from "./functions.js";
import { testFetchAPI } from "./fetchAPI.js";
import { testAsyncAwait } from "./asyncAwait.js";

console.log(sumGeneral(10,50));
console.log(substract(80,35));
console.log(multi(80,35));

testFetchAPI();
testAsyncAwait();