/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.model.SelectItem;

/**
 *
 * @author cie
 */
@ManagedBean(name = "ajaxController")
@RequestScoped
public class AjaxController {
    
     private SelectItem[] opciones= new SelectItem[]{new SelectItem("01","Opcion 01"),
           new SelectItem("02","Opcion 02"),
           new SelectItem("03", "Opcion 03")};
    private String opcionActual;
  
    public AjaxController() 
    {

    }
    
    
    public SelectItem[] getOpciones()
    {
      return opciones;
    }
    
    

    public void setOpciones(SelectItem[] opciones) {
        this.opciones = opciones;
    }
    
    public String getOpcionActual()
    {
      return opcionActual;
    
    }
    
    public void setOpcionActual(String opcionActual)
    {
       this.opcionActual=opcionActual;
    
    }
    
}
