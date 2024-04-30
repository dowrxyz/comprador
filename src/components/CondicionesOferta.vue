<template>
  <div class="grid mx-auto gap-3 my-3 w-11/12 overflow-y-scroll">
    <h2 class="text-center text-xl font-bold text-gray-500 w-full mx-auto">
      Datos de la negociación
    </h2>
    <div class="mx-auto md:grid md:grid-cols-2 w-full gap-2">
      <p class="text-gray-400 text-sm mx-auto col-span-2">
        Revisa los detalles para despachar tu venta.
      </p>

      <h3 class="text-gray-400 text-sm mt-3 col-span-2">
        Producto:
        <span class="text-gray-600 font-bold">Maiz</span>
      </h3>

      <div class="grid gap-1 mt-3">
        <label for="entrega" class="text-gray-400 text-sm">Precio Final</label>
        <input
          type="text"
          id="entrega"
          disabled
          class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
          placeholder="$16.50 QQ"
        />
      </div>

      <div class="grid gap-1 mx-auto mt-3">
        <label for="entrega" class="text-gray-400 text-sm">Cantidad</label>
        <input
          type="text"
          id="entrega"
          disabled
          class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
          placeholder="600 QQ"
        />
      </div>

      <div class="grid gap-1 mx-auto mt-3">
        <label for="entrega" class="text-gray-400 text-sm"
          >Cantidad de entregas</label
        >
        <div class="grid mb-2" v-if="entregas.length > 0">
          <p
            class="text-gray-500 flex gap-3 items-center"
            v-for="(item, index) in entregas"
            :key="index"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              fill="#a2afbe"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path
                d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"
              />
            </svg>
            {{ index + startIndex }}: {{ item.cantidad }} {{ item.unidad }}
          </p>
        </div>
      </div>

      <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
        <label for="recepcion" class="text-gray-400 text-sm"
          >Fecha de entrega</label
        >
        <input
          type="text"
          id="recepcion"
          disabled
          placeholder="19/05/2024"
          class="bg-transparent border-2 rounded-md h-10 w-full text-gray-400 text-sm p-1"
        />
      </div>
      <div class="grid gap-1 mx-auto mt-3 col-span-2 w-full">
        <label for="hora" class="text-gray-400 text-sm">Hora de entrega</label>
        <input
          type="text"
          id="hora"
          disabled
          placeholder="10:30 AM"
          class="bg-transparent border-2 rounded-md h-10 w-full text-gray-400 text-sm p-1"
        />
      </div>

      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="entrega" class="text-gray-400 text-sm"
          >Dirección de entrega</label
        >
        <input
          type="text"
          id="entrega"
          disabled
          class="bg-transparent border-2 rounded-md h-10 w-full text-gray-600 text-sm p-1"
          placeholder="Balvanera 32, Pedro Carbo"
        />
      </div>

      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="recepcion" class="text-gray-400 text-sm"
          >Politicas de recepción</label
        >
        <input
          type="text"
          disabled
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci ligula. Proin eget lorem justo. Donec sodales urna vel imperdiet accumsan. Ut dignissim ipsum et condimentum placerat. Aenean porttitor tellus purus, a feugiat nibh faucibus et. Praesent quam tellus, rutrum at vehicula quis, condimentum nec tellus. Mauris quis aliquet orci. Nulla condimentum dapibus metus, vel faucibus mauris dignissim ut.

Aliquam pretium libero in quam gravida, sed ornare eros efficitur. Nam vitae mattis est. Vivamus ornare metus eu neque auctor hendrerit. Sed tincidunt nisi et porta imperdiet. Donec sagittis turpis felis, et imperdiet neque viverra at. Duis nisl purus, congue sed lacus sit amet, pellentesque ullamcorper mauris. Quisque laoreet, odio eu pretium euismod, tortor nisi scelerisque orci, a malesuada augue diam in dolor. Cras nec sagittis sem, vel imperdiet tellus. Proin gravida quis nisi vitae fringilla. Cras feugiat sapien mi, vel mattis augue hendrerit non. Morbi efficitur at leo vel scelerisque. Duis turpis ligula, ultrices in mollis et, faucibus non neque. Nunc sed nisl in arcu vulputate vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus eleifend laoreet. Donec aliquet placerat vulputate."
          id="recepcion"
          class="bg-transparent border p-2 rounded-md text-sm text-gray-600"
        />
        <button class="text-gray-700 font-bold" @click="openPoliticas">
          Ver todo
        </button>
      </div>
      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="modopago" class="text-gray-400 text-sm">Modo de pago</label>
        <input
          type="text"
          disabled
          placeholder="Modo Garantía"
          id="modopago"
          class="bg-transparent border p-2 rounded-md text-sm text-gray-600"
        />
      </div>
      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="pctajeinicial" class="text-gray-400 text-sm"
          >Porcentaje Inicial</label
        >
        <input
          type="text"
          disabled
          placeholder="30%"
          id="pctajeinicial"
          class="bg-transparent border p-2 rounded-md text-sm text-gray-600"
        />
      </div>
      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="pctajefinall" class="text-gray-400 text-sm"
          >Porcentaje Final</label
        >
        <input
          type="text"
          disabled
          placeholder="70%"
          id="pctajefinall"
          class="bg-transparent border p-2 rounded-md text-sm text-gray-600"
        />
      </div>

      <div class="grid gap-1 mx-auto col-span-2 w-full mt-3">
        <label for="notas" class="text-gray-400 text-sm">Notas</label>
        <textarea
          type="text"
          rows="3"
          disabled
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Null vestibulum orci ligula. Proin eget lorem justo. Donec sodales urna vel imperdiet accumsan. "
          id="notas"
          class="bg-transparent border p-2 rounded-md text-sm text-gray-600"
        ></textarea>
      </div>

      <div class="inline-flex justify-between mx-auto mt-3 col-span-2 w-11/12">
        <label for="domicilio" class="text-gray-400 text-sm"
          >Precio es puesto en domicilio del cliente</label
        >
        <input type="checkbox" id="domicilio" disabled />
      </div>
    </div>

    <button
      class="default-bar rounded-md p-2 h-12 text-center text-white text-sm w-full"
      @click="backToChat"
    >
      Regresar a la conversación
    </button>
  </div>
</template>

<script setup>
import event from "@/libs/event";

const startIndex = 1;

defineProps({
  entregas: Array,
});

const openPoliticas = () => {
  event.emit("openPoliticas");
};

const backToChat = () => {
    event.emit('closeDatos')
}

</script>
