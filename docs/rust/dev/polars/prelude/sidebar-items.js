window.SIDEBAR_ITEMS = {"constant":["IDX_DTYPE","NULL"],"enum":["AggExpr","Ambiguous","AnyValue","ArrowDataType","ArrowTimeUnit","AsofStrategy","BooleanFunction","CategoricalOrdering","ClosedInterval","ClosedWindow","CommentPrefix","CsvEncoding","DataType","Excluded","Expr","FillNullStrategy","FunctionExpr","GroupByMethod","GroupsIndicator","GroupsProxy","IndexOrder","InterpolationMethod","IpcCompression","JoinType","JoinValidation","JsonFormat","Label","LiteralValue","LogicalPlan","NonExistent","NullValues","Operator","ParallelStrategy","ParquetCompression","PolarsError","QuantileInterpolOptions","QuoteStyle","RankMethod","RevMapping","SearchSortedSide","StartBy","TimeUnit","UniqueKeepStrategy","WindowMapping","WindowType"],"fn":["_coalesce_outer_join","_join_suffix_name","_sort_or_hash_inner","abs","all","apply_binary","apply_multiple","arange","arg_sort_by","arg_where","as_struct","avg","base_utc_offset","binary_expr","call_categorical_merge_operation","cast","check_projected_arrow_schema","check_projected_schema","check_projected_schema_impl","clip","clip_max","clip_min","coalesce","coalesce_series","col","collect_all","cols","concat","concat_expr","concat_lf_diagonal","concat_lf_horizontal","concat_list","concat_str","convert_inner_type","convert_to_unsigned_index","count_rows","create_enum_data_type","cum_count","cum_fold_exprs","cum_max","cum_min","cum_prod","cum_reduce_exprs","cum_sum","date_ranges","datetime","datetime_range","datetime_ranges","datetime_to_timestamp_ms","datetime_to_timestamp_ns","datetime_to_timestamp_us","default_join_ids","diff","dst_offset","dtype_col","dtype_cols","duration","first","floor_div_series","fmt_group_by_column","fold_exprs","format_str","get_reader_bytes","get_sequential_row_statistics","group_by_values","group_by_windows","hor_str_concat","impl_replace_time_zone","impl_replace_time_zone_fast","in_nanoseconds_window","indexes_to_usizes","int_range","int_ranges","interpolate","is_between","is_first_distinct","is_in","is_last_distinct","is_not_null","is_null","is_positive_idx_uncertain","last","len","lit","make_categoricals_compatible","make_list_categoricals_compatible","map_binary","map_list_multiple","map_multiple","materialize_empty_df","materialize_projection","max","mean","median","merge_dtypes","min","negate","negate_bitwise","new_int_range","not","private_left_join_multiple_keys","quantile","reduce_exprs","repeat","repeat_by","replace","replace_time_zone","resolve_homedir","split_helper","split_to_struct","str_concat","strip_chars","strip_chars_end","strip_chars_start","strip_prefix","strip_suffix","sum","ternary_expr","time_ranges","when"],"macro":["df","polars_bail","polars_ensure","polars_err","polars_warn"],"mod":["aggregations","arity","array","binary","cat","chunkedarray","cloud","datatypes","datetime","default_arrays","dt","expr","fill_null","fixed_size_list","float_sorted_arg_max","float_sum","full","gather","mode","nan_propagating_aggregate","null","predicates","read_impl","search_sorted","series","slice","sort","strings","udf","utf8","utils","zip"],"static":["BOOLEAN_RE","DTYPE_ENUM_KEY","DTYPE_ENUM_VALUE","FLOAT_RE","INTEGER_RE"],"struct":["AggregationContext","AnonymousScanArgs","AnonymousScanOptions","Arc","ArrayNameSpace","ArrowField","ArrowSchema","AsOfOptions","BatchedParquetReader","BinaryOffsetType","BinaryType","BooleanChunkedBuilder","BooleanType","Bounds","BoundsIter","BrotliLevel","CatIter","CategoricalChunked","CategoricalChunkedBuilder","CategoricalNameSpace","CategoricalType","ChainedThen","ChainedWhen","ChunkId","ChunkedArray","CsvReader","CsvWriter","CsvWriterOptions","DataFrame","DateType","DatetimeArgs","DatetimeType","DecimalType","Duration","DurationArgs","DurationType","DynamicGroupOptions","ExprNameNameSpace","Field","FieldsMapper","FileMetaData","FixedSizeListType","Flat","Float32Type","Float64Type","GlobalRevMapMerger","GroupBy","GroupsIdx","GroupsProxyIter","GroupsProxyParIter","GzipLevel","InProcessQuery","Int128Type","Int16Type","Int32Type","Int64Type","Int8Type","IpcReader","IpcStreamReader","IpcStreamWriter","IpcStreamWriterOption","IpcWriter","IpcWriterOption","IpcWriterOptions","JoinArgs","JoinBuilder","JoinOptions","JsonLineReader","JsonReader","JsonWriter","JsonWriterOptions","LazyCsvReader","LazyFrame","LazyGroupBy","LazyJsonLineReader","ListBinaryChunkedBuilder","ListBooleanChunkedBuilder","ListNameSpace","ListPrimitiveChunkedBuilder","ListStringChunkedBuilder","ListType","Logical","MeltArgs","Nested","NoNull","Null","NullableIdxSize","ObjectType","OptState","OwnedObject","ParquetReader","ParquetWriteOptions","ParquetWriter","PhysicalIoHelper","PrimitiveChunkedBuilder","RankOptions","RollingCovOptions","RollingGroupOptions","RollingOptions","RollingOptionsFixedWindow","RollingOptionsImpl","RollingQuantileParams","RollingVarParams","ScanArgsAnonymous","ScanArgsIpc","ScanArgsParquet","Schema","SerializeOptions","Series","SlicedGroups","SortMultipleOptions","SortOptions","SpecialEq","StringCacheHolder","StringType","StrptimeOptions","StructArray","StructChunked","StructNameSpace","Then","TimeType","UInt16Type","UInt32Type","UInt64Type","UInt8Type","UnionArgs","UserDefinedFunction","When","Window","ZstdLevel"],"trait":["AnonymousScan","ArgAgg","ArithmeticChunked","ArrayCollectIterExt","ArrayFromIter","ArrayFromIterDtype","AsBinary","AsList","AsRefDataType","AsString","AsofJoin","AsofJoinBy","BinaryNameSpaceImpl","BinaryUdfOutputField","CategoricalMergeOperation","ChunkAgg","ChunkAggSeries","ChunkAnyValue","ChunkApply","ChunkApplyKernel","ChunkBytes","ChunkCast","ChunkCompare","ChunkExpandAtIndex","ChunkExplode","ChunkFillNullValue","ChunkFilter","ChunkFull","ChunkFullNull","ChunkQuantile","ChunkReverse","ChunkRollApply","ChunkSet","ChunkShift","ChunkShiftFill","ChunkSort","ChunkTake","ChunkTakeUnchecked","ChunkUnique","ChunkVar","ChunkZip","ChunkedBuilder","ChunkedCollectInferIterExt","ChunkedCollectIterExt","ChunkedSet","CrossJoin","DataFrameJoinOps","DataFrameOps","DateMethods","DatetimeMethods","DfTake","DurationMethods","ExprEvalExtension","FromData","FromDataBinary","FromDataUtf8","FunctionOutputField","GetAnyValue","IndexOfSchema","IndexToUsize","InitHashMaps","InitHashMaps2","IntoGroupsProxy","IntoLazy","IntoListNameSpace","IntoSeries","IntoVec","IsFirstDistinct","IsLastDistinct","JoinDispatch","LazyFileListReader","LhsNumOps","ListBuilderTrait","ListFromIter","ListNameSpaceExtension","ListNameSpaceImpl","Literal","LogicalType","MutableBitmapExtension","NamedFrom","NamedFromOwned","NewChunkedArray","NumOpsDispatch","NumOpsDispatchChecked","NumericNative","PartitionedAggregation","PhysicalExpr","PolarsArray","PolarsDataType","PolarsFloatType","PolarsIntegerType","PolarsIterator","PolarsMonthEnd","PolarsMonthStart","PolarsNumericType","PolarsObject","PolarsRound","PolarsTemporalGroupby","PolarsTruncate","PolarsUpsample","QuantileAggSeries","Reinterpret","RenameAliasFn","RollingSeries","RoundSeries","SerReader","SerWriter","SeriesBinaryUdf","SeriesJoin","SeriesMethods","SeriesOpsTime","SeriesRank","SeriesSealed","SeriesTrait","SeriesUdf","SlicedArray","StaticArray","StringMethods","StringNameSpaceImpl","TakeChunked","TemporalMethods","TimeMethods","ToDummies","UdfSchema","VarAggSeries","VecHash"],"type":["AllowedOptimizations","ArrayChunked","ArrayRef","BinaryChunked","BinaryChunkedBuilder","BinaryOffsetChunked","BooleanChunked","BorrowIdxItem","ChunkJoinOptIds","DateChunked","DatetimeChunked","DecimalChunked","DurationChunked","DynArgs","FieldRef","FieldsNameMapper","FileMetaDataRef","FillNullLimit","Float32Chunked","Float64Chunked","GetOutput","GroupsSlice","IdxArr","IdxCa","IdxItem","IdxSize","IdxType","InnerJoinIds","Int128Chunked","Int16Chunked","Int32Chunked","Int64Chunked","Int8Chunked","LargeBinaryArray","LargeListArray","LargeStringArray","LeftJoinIds","ListChunked","NullableChunkId","ObjectChunked","PathIterator","PlHashMap","PlHashSet","PlIdHashMap","PlIndexMap","PlIndexSet","PolarsResult","RowGroupIter","SchemaRef","StringChunked","StringChunkedBuilder","TimeChunked","TimeZone","UInt16Chunked","UInt32Chunked","UInt64Chunked","UInt8Chunked"]};