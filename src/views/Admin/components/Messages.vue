<template>
    <div class="messages">
        <message-list></message-list>
        <message-view></message-view>
    </div>
</template>

<script>
import MessageList from './MessageList'
import MessageView from './MessageView'

export default {
    name: 'messages',
    components: {
        MessageList,
        MessageView
    }
}
</script>

<style scoped>
.messages {
    display: flex;
}
</style>
