<script>
    export let name
    export let type
    export let required
    export let placeholder
    export let id

</script>

<div class="relative z-0 mb-6 w-full group">
    <input type={type} name={name} id={id}
    class="input input-ghost block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] 
    border-neutral/30 appearance-none 
    focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=' ' required={required} />
    <label for={id} class="absolute text-sm text-gray-500 text-left
    duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 
    peer-focus:text-secondary peer-focus:font-bold peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label>
</div>