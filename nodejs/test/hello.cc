#include <node.h>
namespace demo{
	using v8::FunctionCallbackInfo;
	using v8::Isolate;
	using v8::Object;
	using v8::String;
	using v8::Value;
	void Method(const FunctionCallbackInfo<value& args>){
		Isolate* isolate=args.GetIsolate();
		args.GetReturnVlue().Set(String::NewFromUtf8(isolate,"world"));
	}
	void init(LOcal<Object> exports){
		NODE_SET_METHOD(exports,"hello",Method);
	}
	NODE_MOUDLE(addon,init);
}
