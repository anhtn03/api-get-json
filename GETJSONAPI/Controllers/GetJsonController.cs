using System;
using GETJSONAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace GETJSONAPI.Controllers
{
    [Route("api/get-json")]
    [ApiController]
    public class GetJsonController : Controller {

        private readonly IAcessReqService _acessReq;

        public GetJsonController(IAcessReqService acessReq)
        {
            _acessReq = acessReq ?? throw new ArgumentNullException(nameof(acessReq));
        }

        [HttpPost]
        public string GetJson([FromBody]Request @request)
        {
            _acessReq.AcessReq(new Request
            {
                req = @request.req
            });

            var ReadFile = System.IO.File.ReadAllText("Data.Json");
            return ReadFile;
        }
    }
}
