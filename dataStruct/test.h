#include <stdio.h>
typedef int ElemType ;
ElemType arr[]={0,9,8,7,6,5,4,3,2,1};
ElemType n=10,i,j;
ElemType low,high,mid;
void BinSort(ElemType r[],ElemType n)
{
for(i=2;i<=n;i++)
{
r[0]=r[i];
low=1; high=i-1;
while (low<=high)
{
mid=(low+high)/2;
if(r[0]<r[mid])
high=mid-1;
else
low=mid+1;}
for(j=i-1;j>=low;j--)
{
r[i]=r[j];
i--;
}
r[low]=r[0];} }
void put(ElemType r[],ElemType n)
{
for(j=1;j<n;j++)
printf("%d\t",r[j]);
printf("\n");
}
void main()
{
BinSort(arr,n);
put(arr,n);
}