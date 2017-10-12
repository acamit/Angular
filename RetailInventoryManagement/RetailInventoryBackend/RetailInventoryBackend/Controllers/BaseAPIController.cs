using Newtonsoft.Json;
using RetailInventoryBackend.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace RetailInventoryBackend.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly ProductDBEntities ProductDB = new ProductDBEntities();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
