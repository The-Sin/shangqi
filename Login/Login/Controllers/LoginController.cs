using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Web.Security;
using Login.Models;
using Newtonsoft.Json;

namespace Login.Controllers
{
    public class LoginController : ApiController
    {
        Models.DBUserEntities dbu = new Models.DBUserEntities();
        

        [HttpGet]
        public string Login(string uname,string upwd)
        {
            var data = from a in dbu.UserInfo
                       where a.U_LoginName == uname && a.U_Password == upwd
                       select a.U_Role;
            var name = from a in dbu.UserInfo
                       where a.U_LoginName == uname && a.U_Password == upwd
                       select a.U_Name;

            if (data.Count() > 0)
            {
                //FormsAuthenticationTicket ticketObject = new FormsAuthenticationTicket(0 , uname, DateTime.Now, DateTime.Now.AddHours(1), true, string.Format("{0}&{1}", uname, upwd), FormsAuthentication.FormsCookiePath);
                string time = DateTime.Now.AddHours(3).ToString();
                bool Status = true;
                var result = new
                {
                    Result = true,
                    //Ticket = FormsAuthentication.Encrypt(ticketObject),
                    name,
                    data,
                    time
                };
                return JsonConvert.SerializeObject(result);
            }
            else
            {
                var result = new
                {
                    Result = false,
                };
                return JsonConvert.SerializeObject(result);
            }
        }
    }
}
