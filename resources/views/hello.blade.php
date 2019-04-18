@extends('layout')

@section('content')
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <div id="app">
        <tabs>
            <tab name="About Us" :selected="true">
                <h1>About us</h1>
            </tab>
            <tab name="About Claire">
                <h1>Claire</h1>
            </tab>
            <tab name="About Alan">
                <h1>Alan</h1>
            </tab>
        </tabs>
    </div>





@endsection('content')

