using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RetailInventoryBackend.DBContext;
using System.Data.Entity;
using System.Diagnostics;

namespace RetailInventoryBackend.Controllers
{
    public class ProductAPIController : BaseAPIController
    {
        public HttpResponseMessage Get(string text = "")
        {
            //string search = "/" + text + "/";
            var res = ProductDB.TblUsers.Where((p) => p.Name.Contains(text)).Where((p)=>p.OutOfStock==0);
            //return ToJson(ProductDB.TblUsers.AsEnumerable());
            return ToJson(res.AsEnumerable());
        }
                
        public HttpResponseMessage GetById(int id)
        {
            Console.WriteLine(id);
            var user = ProductDB.TblUsers.Where((x) => x.Id == id);

            return ToJson(user);
        }


        [HttpPost]
        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            ProductDB.TblUsers.Add(value);
            return ToJson(ProductDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            ProductDB.Entry(value).State = EntityState.Modified;
            return ToJson(ProductDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            ProductDB.TblUsers.Remove(ProductDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(ProductDB.SaveChanges());
        }

        public HttpResponseMessage OptionsUser()
        {
            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            return response;
        }

    }
}
