import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TiendaComponent } from './tienda/tienda.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ListaCuadrosComponent } from './tienda/lista-cuadros/lista-cuadros.component';
import { DetalleCuadroComponent } from './tienda/detalle-cuadro/detalle-cuadro.component';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { FiltrosComponent } from './tienda/filtros/filtros.component';
import { MensajeCompraComponent } from './tienda/mensaje-compra/mensaje-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    InicioComponent,
    AboutmeComponent,
    TiendaComponent,
    GaleriaComponent,
    ContactoComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    ListaCuadrosComponent,
    DetalleCuadroComponent,
    CarritoComponent,
    FiltrosComponent,
    MensajeCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
