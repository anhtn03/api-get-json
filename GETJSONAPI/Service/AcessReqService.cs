using System;
namespace GETJSONAPI.Service
{
    public class AcessReqService: IAcessReqService
    {
        public AcessReqService()
        {
        }

        public bool AcessReq(Request @request)
        {
            if(request.req != "bing")
            {
                throw new ArgumentNullException("Acess denied");
            }

            return true;
        }
    }
}
