<template>
    <div id="app">
        <todo-list></todo-list>
    </div>
</template>

<script>
    import TodoList from './components/TodoList'

    export default {
        components: {
            // Add a reference to the TodoList component in the components property
            TodoList,
        },
    };
</script>
