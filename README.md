# [@gik/tools-mapper](http://gik.mx) *0.0.7*
> Flattens an object to a key-val dictionary. Part of our [tools suite](http://github.com/gikmx/tools)

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms
- darwin
- linux

#### <a name="table-of-contents"></a> Table of contents
- **[mapper](#mapper)** Generates a flattened object containing a map for all the properties
- **[Types](#Types)** ``
  - **[MapperResult](#Types.MapperResult)** `typedef` A map to all the properties contained in an object.


# <a name="mapper"></a> mapper

Generates a flattened object containing a map for all the properties
available on `subject`.
> - [Standalone version](https://github.com/gikmx/tools-mapper).
> - [Report a Bug](https://github.com/gikmx/tools-mapper/issues).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The object you want to map.</td>
    </tr>
</table>


###### Returns
 [`mapperResult`](#mapperResult) <span style="font-weight:normal"> - A flattened object.</span>
###### Throws
- `mapperTypeError`

###### Example 
```js
const subject = {
    a: {
        b: {
           d: true,
           e:  {
               g: 'foo'
           }
        },
        f: undefined,
    }
};
const result = Mapper(subject);
// result:
// { 'a.b.d': true, 'a.b.e.g': 'foo', 'a.f': undefined }
```

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="Types"></a> Types

###### Members

- [MapperResult](#Types.MapperResult)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="Types.MapperResult"></a> MapperResult
> static  typedef of [`Types`](#Types)


A map to all the properties contained in an object.



<small>**[▲ Top](#Types)**</small>

---

