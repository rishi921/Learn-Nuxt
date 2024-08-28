export default function (context) {
    if (!context.store.state.authenticated) {
        return context.redirect('/login')
    }
}