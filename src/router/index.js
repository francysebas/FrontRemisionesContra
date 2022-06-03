import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListRemisiones from '@/components/Remisiones/ListRemisiones'
import EditRemisiones from '@/components/Remisiones/EditRemisiones'
import DeleteRemision from '@/components/Remisiones/DeleteRemision'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/remisiones',
      name: 'ListRemisiones',
      component: ListRemisiones
    },
   /* {
      path: '/remisiones/editar',
      name: 'EditRemisiones',
      component: EditRemisiones
    }*/
    {
      path: '/remisiones/:afiliadoId/editar',
      name: 'EditRemisiones',
      component: EditRemisiones
    },
    {
      path: '/remisiones/:afiliadoId/eliminar',
      name: 'DeleteRemision',
      component: DeleteRemision
    }
  ],
  mode:'history'
})
