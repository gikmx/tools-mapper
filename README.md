# [@gik/tools-mapper](https://github.com/gikmx/tools) *0.0.6*
> Creates a single-level dictionary for all the properties in an object.

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms
- darwin
- linux

#### <a name="table-of-contents"></a> Table of contents
- **[mapper](#mapper)** Generates a flattened object containing a map for all the properties
  - **[Types](#mapper.Types)** Types used on `mapper`
    - **[MapperParamError](#mapper.Types.MapperParamError)** `typedef` The subject passed is not the expected type.
    - **[MapperResult](#mapper.Types.MapperResult)** `typedef` A map to all the properties contained in an object.


# <a name="mapper"></a> mapper

Generates a flattened object containing a map for all the properties
available on `subject`.

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
###### Members

- [Types](#mapper.Types)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="mapper.Types"></a> Types

Types used on `mapper`


###### Members

- [MapperParamError](#mapper.Types.MapperParamError)
- [MapperResult](#mapper.Types.MapperResult)

<small>**[▲ Top](#mapper)**</small>

---

### <a name="mapper.Types.MapperParamError"></a> MapperParamError
> static  typedef of [`mapper.Types`](#mapper.Types)


The subject passed is not the expected type.



<small>**[▲ Top](#mapper.Types)**</small>

---

### <a name="mapper.Types.MapperResult"></a> MapperResult
> static  typedef of [`mapper.Types`](#mapper.Types)


A map to all the properties contained in an object.



<small>**[▲ Top](#mapper.Types)**</small>

---

