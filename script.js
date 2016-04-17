
var A = [6, 3, 2, 7, 8, 1, 4, 5];
var l = 0;
var r = A.length-1;

alert('the unsorted array is: ' + A)
QuickSort(A,l,r);
alert('the sorted array is: ' + A)

function QuickSort(A, l, r){
    var index = Partition(A, l, r);
    if (l< index-1){
        QuickSort(A, l, index-1);
    }
    if (l > index){
        QuickSort(A, index, r);
    }
}

function Partition(A, l, r){
    var _pivot = Math.floor((Math.random() * (r-l)+l+1));
    while (l < r){
        while(A[l] < _pivot){
            l++;
        }
        while(A[r] > _pivot){
            r--;
        }
        if (l <= r){
            var _temp = A[l];
            A[l] = A[r];
            A[r] =_temp;
            l++;
            r--;
        }
    }
    return l;
}
