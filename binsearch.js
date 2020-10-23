var arr = [1,3,5,7,9,10,11,12,14,15,19,20];
function bins(arr,val){
    var low = 0,
    high = arr.length-1;
    for(low;  low <= high; low++){
        var mid = Math.floor((high - low)/2);
        if(val == arr[mid]){
            return mid;

        }else if(val > arr[mid]){
            low = mid + 1;

        }else if(val < arr[mid]){
            high = mid - 1;

        }
        return -1;
    }

}
console.log(bins(arr,5));