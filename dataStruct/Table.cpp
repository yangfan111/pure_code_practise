
class Sort{

    /**
     * 直接插入排序
     */ 
    void Insert_DirectSort(int r[],int n)
    {
        int forIndex = 1;
        while(forIndex<n)
        {
            InsertEle(r,forIndex);
            forIndex+=1;
        }
    }
    void InsertEle(int r[],int forIndex)
    {
        int insertIndex =0;

        int tarData = r[forIndex];
        for(int i=forIndex-1;i>=0;i--)
        {
            if(r[i]<=tarData)
                break;

             int tmp =r[i];
             r[i] = tarData;
             r[i+1]=tmp;
        }
   
    }
    
    int InsertEle_HalfWay(int r[],int beginIdx,int endIdx,int data)
    {
        while(beginIdx<=endIdx)
        {
            int mid = (beginIdx+endIdx)/2;
            if(r[mid]>data)
            {
                endIdx=mid-1;
            }
            else{
                beginIdx = mid+1;
            }
        }
        int tarIndex = endIdx+1;
        // if(endIdx>=beginIdx)
        // {
        //        int halfIndex = (beginIdx+endIdx)/2;
           
        //        if(data>r[halfIndex])
               
        //          return InsertEle_HalfWay( r, halfIndex, endIdx, data);
               
            
        //        return InsertEle_HalfWay( r, beginIdx, halfIndex, data);
               
        // }
        //     return endIdx+1;
        
    }

    void SelectQuickSort(int r[],int beginIdx,int endIdx)
    {
        int midIndex = beginIdx;
        int b = beginIdx;
        int e = endIdx;
        int data = r[beginIdx];
        while(b != e)
        {
            while(r[e]>=data && e>b) --e;
         
            while(r[b]<=data && e>b) ++b;
            if(b<e){ChangeData(r,b,e);};
        }
         //最终将基准数归位
    r[beginIdx]=r[b];
    r[b]=data;
    }
    void ChangeData(int r[],int ia,int ib)
    {
        
    }

    
}